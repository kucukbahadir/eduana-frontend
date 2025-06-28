import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const LightweightSelect = React.memo(({ value, onChange, options = [1, 2, 3, 4, 5], className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 8, left: '50%' });
  const selectRef = useRef(null);
  const contentRef = useRef(null);
  const optionRefs = useRef([]);

  const currentIndex = options.findIndex(option => option === value);

  const calculateDropdownPosition = useCallback(() => {
    if (!selectRef.current) return;

    const triggerRect = selectRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const dropdownWidth = 48;
    const dropdownHeight = 200;
    
    let top = 32;
    let left = '50%';
    let transform = 'translateX(-50%)';
    
    if (triggerRect.left + triggerRect.width / 2 + dropdownWidth / 2 > viewportWidth - 20) {
      left = 'auto';
      transform = 'none';
      const rightOffset = 0;
      setDropdownPosition({ 
        top, 
        right: rightOffset,
        transform 
      });
      return;
    }
    
    if (triggerRect.left + triggerRect.width / 2 - dropdownWidth / 2 < 20) {
      left = 0;
      transform = 'none';
    }
    
    if (triggerRect.bottom + dropdownHeight > viewportHeight - 20) {
      top = -dropdownHeight - 8;
    }
    
    setDropdownPosition({ top, left, transform });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
      calculateDropdownPosition();
    }
  }, [isOpen, currentIndex, calculateDropdownPosition]);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleResize = () => calculateDropdownPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, calculateDropdownPosition]);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex].scrollIntoView({
        block: 'nearest'
      });
    }
  }, [highlightedIndex, isOpen]);

  const handleKeyDown = useCallback((event) => {
    if (!isOpen) {
      switch (event.key) {
        case 'Enter':
        case ' ':
        case 'ArrowDown':
        case 'ArrowUp':
          event.preventDefault();
          setIsOpen(true);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
          event.preventDefault();
          const numValue = parseInt(event.key, 10);
          if (options.includes(numValue)) {
            onChange(String(numValue));
          }
          break;
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        selectRef.current?.querySelector('button')?.focus();
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
        
      case 'Home':
        event.preventDefault();
        setHighlightedIndex(0);
        break;
        
      case 'End':
        event.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex]);
        }
        break;
        
      case 'Tab':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
        
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        event.preventDefault();
        const numValue = parseInt(event.key, 10);
        if (options.includes(numValue)) {
          handleSelect(numValue);
        }
        break;
    }
  }, [isOpen, highlightedIndex, options, onChange]);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleSelect = useCallback((selectedValue) => {
    onChange(String(selectedValue));
    setIsOpen(false);
    setHighlightedIndex(-1);
    setTimeout(() => {
      selectRef.current?.querySelector('button')?.focus();
    }, 0);
  }, [onChange]);

  const handleMouseEnter = useCallback((index) => {
    setHighlightedIndex(index);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          "border-border font-medium data-[placeholder]:text-default focus-visible:border-ring focus-visible:ring-ring/50",
          "flex h-6 w-16 items-center justify-between rounded-full border bg-muted px-2 py-1 text-xs shadow-xs",
          "transition-[color,box-shadow] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50",
          "hover:bg-muted/80",
          className
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Rating selector, current value ${value}`}
        title="Use arrow keys to navigate, Enter to select, or press number keys (1-5) for quick selection"
      >
        <span className="flex items-center gap-1">
          {value}
        </span>
        <ChevronDownIcon 
          className={cn(
            "size-3 opacity-50 transition-transform duration-150",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setIsOpen(false);
              setHighlightedIndex(-1);
            }}
          />
          
          <div
            ref={contentRef}
            className={cn(
              "bg-popover text-popover-foreground",
              "fixed z-50 min-w-[3rem] overflow-hidden rounded-md border shadow-md",
              "animate-in fade-in-0 duration-150"
            )}
            style={{
              top: dropdownPosition.top !== undefined 
                ? `${selectRef.current?.getBoundingClientRect().bottom + dropdownPosition.top - 32}px`
                : 'auto',
              left: dropdownPosition.left !== '50%' && dropdownPosition.left !== undefined
                ? `${selectRef.current?.getBoundingClientRect().left + dropdownPosition.left}px`
                : dropdownPosition.left === '50%' 
                ? `${selectRef.current?.getBoundingClientRect().left + selectRef.current?.getBoundingClientRect().width / 2}px`
                : 'auto',
              right: dropdownPosition.right !== undefined
                ? `${window.innerWidth - selectRef.current?.getBoundingClientRect().right + dropdownPosition.right}px`
                : 'auto',
              bottom: dropdownPosition.top < 0 
                ? `${window.innerHeight - selectRef.current?.getBoundingClientRect().top + 8}px`
                : 'auto',
              transform: dropdownPosition.transform || 'translateX(-50%)',
            }}
            role="listbox"
            aria-label="Rating options"
          >
            <div className="p-1 max-h-60 overflow-auto">
              {options.map((option, index) => (
                <button
                  key={option}
                  ref={el => optionRefs.current[index] = el}
                  type="button"
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className={cn(
                    "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2",
                    "rounded-sm py-1.5 pr-8 pl-2 text-xs outline-none select-none",
                    "transition-colors duration-150",
                    "hover:bg-accent hover:text-accent-foreground",
                    value === option && "bg-accent text-accent-foreground font-medium",
                    highlightedIndex === index && "bg-accent/50",
                    value === option && highlightedIndex === index && "bg-accent text-accent-foreground"
                  )}
                  role="option"
                  aria-selected={value === option}
                  aria-label={`Rating ${option}`}
                  tabIndex={-1}
                >
                  <span className="flex-1 text-center">{option}</span>
                  {value === option && (
                    <span className="absolute right-2 flex size-3.5 items-center justify-center">
                      <CheckIcon className="size-3" />
                    </span>
                  )}
                  <span className="absolute left-1 text-[10px] opacity-40">
                    {option}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="border-t px-2 py-1 text-[10px] text-muted-foreground text-center">
              ↑↓ Navigate • <KeyboardInput>Enter</KeyboardInput> Select • <KeyboardInput>Esc</KeyboardInput> Close • <KeyboardInput>1</KeyboardInput> - <KeyboardInput>5</KeyboardInput> Quick
            </div>
          </div>
        </>
      )}
    </div>
  );
});

const KeyboardInput = ({ children }) => {
  return (
    <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
      {children}
    </kbd>
  )
}

LightweightSelect.displayName = "LightweightSelect";

export default LightweightSelect;