import React, { useEffect, useRef, useState } from "react";
import evaluationCriteria from "../constants/evaluationCriteria";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EvaluationRow from "./EvaluationRow";

const EvaluationTable = React.memo(({ students, evaluations, handleEvaluationChange }) => {
  const tableRef = useRef(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleTableKeyDown = (event) => {
      if (!tableRef.current?.contains(document.activeElement)) return;

      switch (event.key) {
        case "Home":
          if (event.ctrlKey) {
            event.preventDefault();
            const firstSelect = tableRef.current?.querySelector('button[aria-haspopup="listbox"]');
            firstSelect?.focus();
          }
          break;

        case "End":
          if (event.ctrlKey) {
            event.preventDefault();
            const allSelects = tableRef.current?.querySelectorAll('button[aria-haspopup="listbox"]');
            const lastSelect = allSelects?.[allSelects.length - 1];
            lastSelect?.focus();
          }
          break;

        case "F1":
        case "F2":
          event.preventDefault();
          setShowHelp(true);
          break;
      }
    };

    document.addEventListener("keydown", handleTableKeyDown);
    return () => document.removeEventListener("keydown", handleTableKeyDown);
  }, []);

  return (
    <Card className="p-6 gap-4 rounded-md w-full">
      <div className="flex items-center justify-between">
        <SectionHeader icon={Star} title="Evaluate" subtitle="Scale: 1 to 5" />
        <Dialog open={showHelp} onOpenChange={setShowHelp}>
          <DialogContent className="text-nowrap max-w-2xl!">
            <DialogHeader className={"hidden"}>
              <DialogTitle>Keyboard Shortcuts</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Use these shortcuts to navigate and rate students efficiently.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
                <div className="space-y-1">
                  <ShortcutRow keys={["Tab"]} description="Move to next rating selector" />
                  <ShortcutRow keys={["Shift", "Tab"]} description="Move to previous rating selector" />
                  <ShortcutRow keys={["Ctrl", "Home"]} description="Jump to first rating selector" />
                  <ShortcutRow keys={["Ctrl", "End"]} description="Jump to last rating selector" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Quick Rating</h4>
                <div className="space-y-1">
                  <ShortcutRow keys={["1", "2", "3", "4", "5"]} description="Instantly set rating (works when selector is focused)" />
                  <ShortcutRow keys={["Enter", "Space"]} description="Open rating dropdown" />
                  <ShortcutRow keys={["↑", "↓"]} description="Navigate through options in open dropdown" />
                  <ShortcutRow keys={["Esc"]} description="Close dropdown without selecting" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Advanced</h4>
                <div className="space-y-1">
                  <ShortcutRow keys={["Home"]} description="Jump to first option in dropdown" />
                  <ShortcutRow keys={["End"]} description="Jump to last option in dropdown" />
                  <ShortcutRow keys={["F1", "F2"]} description="Show this help dialog" />
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">Tips</h4>
                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                  <li>Use number keys (1-5) for fastest rating entry</li>
                  <li>After selecting a rating, focus automatically moves to next field</li>
                  <li>Complete keyboard-only workflow — no mouse needed!</li>
                  <li>Tab through all students systematically for consistent evaluation</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div
        ref={tableRef}
        className="relative rounded-md overflow-visible"
        tabIndex={-1}
        style={{
          overflow: "visible",
          position: "static",
        }}
      >
        <Table className="overflow-visible">
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              {evaluationCriteria.map((criteria, index) => (
                <TableHead key={criteria.id} className="text-center text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <span>{criteria.name}</span>
                    <span className="text-[10px] opacity-50">Tab {index + 2}</span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-visible">
            {students.map((student, studentIndex) => (
              <EvaluationRow
                key={student.id}
                student={student}
                initialEvaluations={evaluations[student.id]}
                onEvaluationChange={handleEvaluationChange}
                studentIndex={studentIndex}
                totalStudents={students.length}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-xs text-muted-foreground text-center space-y-1 border-t pt-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <KeyboardInput>Tab</KeyboardInput> Navigate
          </div>
          <div>
            <KeyboardInput>1-5</KeyboardInput> Quick rate
          </div>
          <div>
            <Button variant="link" size="sm" onClick={() => setShowHelp(true)} className="h-auto text-xs">
              View all shortcuts
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
});

const ShortcutRow = ({ keys, description }) => (
  <div className="flex items-center justify-between py-1 pe-10">
    <div className="flex items-center gap-1">
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          {index > 0 && <span className="text-muted-foreground text-xs">+</span>}
          <KeyboardInput>{key}</KeyboardInput>
        </React.Fragment>
      ))}
    </div>
    <span className="text-xs text-muted-foreground flex-1 ml-2">{description}</span>
  </div>
);

const KeyboardInput = ({ children }) => {
  return (
    <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 mr-0.5 font-mono text-[10px] font-medium opacity-100 select-none">
      {children}
    </kbd>
  );
};

export default EvaluationTable;
