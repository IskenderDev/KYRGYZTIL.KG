import { Search } from "lucide-react";

import { Button } from "../common/Button";

interface SearchInputProps {
  value: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

export function SearchInput({ value, placeholder = "Издөө", onSearch }: SearchInputProps) {
  return (
    <form
      className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSearch(String(formData.get("search") || "").trim());
      }}
    >
      <label className="relative flex-1">
        <span className="sr-only">{placeholder}</span>
        <Search aria-hidden className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        <input
          key={value}
          name="search"
          className="focus-ring min-h-11 w-full rounded-md border-border bg-white pl-10 text-ink placeholder:text-ink-muted"
          placeholder={placeholder}
          defaultValue={value}
        />
      </label>
      <Button type="submit" variant="secondary">
        Издөө
      </Button>
    </form>
  );
}
