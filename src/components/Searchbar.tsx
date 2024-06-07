'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const Searchbar = () => {
  const router = useRouter();

  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = value.trim().toLowerCase();
    if (trimmedValue) {
      router.push(`/list?name=${trimmedValue}`);
    }
  };

  return (
    <form
      className="bg-gray-100 flex items-center justify-between gap-4 p-2 rounded-lg flex-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search For Anything!"
        className="bg-transparent outline-none flex-1"
        aria-label="Search input"
      />
      <button
        type="submit"
        className="cursor-pointer"
        aria-label="Search button"
      >
        <Image src={'/search.png'} alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default Searchbar;
