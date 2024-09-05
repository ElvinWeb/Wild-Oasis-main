"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        onFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>
      <FilterButton
        onFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </FilterButton>
      <FilterButton
        onFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </FilterButton>
      <FilterButton
        onFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

function FilterButton({
  filter,
  onFilter,
  children,
  activeFilter,
}: {
  filter: string;
  onFilter: Function;
  children: string;
  activeFilter: string;
}) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => onFilter(filter)}
    >
      {children}
    </button>
  );
}
