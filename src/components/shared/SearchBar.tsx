import React from 'react';

import { Search } from 'lucide-react';

import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className="flex w-[240px] items-center rounded-3xl bg-background px-2">
      <Search />
      <Input type="text" placeholder={'Search Facebook'} className="border-0" />
    </div>
  );
};

export default SearchBar;
