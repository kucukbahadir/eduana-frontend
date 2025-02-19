import { Link } from 'react-router';
import { Input } from './ui/input';
import { Bell, Blocks, Moon, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-2 px-4 border-b bg-background w-full">
      <div className='flex justify-between items-center mx-auto max-w-6xl'>
        <div className='flex gap-8'>
          <Link to="/" className='text-primary font-semibold'>Home</Link>
          <Link to="/login" className='text-primary font-semibold'>Login</Link>
        </div>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <Search size={12} className='absolute left-0 top-0 m-3.5 pointer-events-none' />
            <Input placeholder='Search' className='pl-10'/>
          </div>
          <Bell fill='black' size={18} />
          <Blocks fill='black' size={18} />
          <Moon fill='black' size={18} />
          <img className='w-8 h-8 rounded-full' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' />
        </div>
      </div>
    </nav>
);
}

export default Navbar;