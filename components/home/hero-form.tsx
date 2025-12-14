"use client";

import { format } from "date-fns";
import { CalendarIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const HeroForm = () => {
  const [date, setDate] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 border md:flex-row md:items-center">
      <div className="relative flex flex-1 rounded border items-center xl:min-w-md">
        <Input
          type="text"
          placeholder="Accommodation"
          className="border-0 pr-10 placeholder:text-black py-6! rounded h-auto! shadow-none focus-visible:ring-0"
        />
        <HomeIcon className="absolute right-3 size-6 text-black/60" />
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "flex flex-1 rounded  h-auto! items-center justify-between gap-2 py-6! pr-4 font-normal hover:bg-transparent",
              !date?.from && "text-muted-foreground",
            )}
            onClick={() => setOpen(true)}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-900">
                {date?.from ? format(date.from, "MMM dd, yyyy") : "Check in"}
              </span>
            </div>
            <CalendarIcon className="size-6  text-black/60" />
          </Button>
        </PopoverTrigger>

        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "flex flex-1 rounded h-auto! items-center justify-between gap-2 py-6! pr-4 font-normal hover:bg-transparent",
              !date?.to && "text-muted-foreground",
            )}
            onClick={() => setOpen(true)}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-900">
                {date?.to ? format(date.to, "MMM dd, yyyy") : "Check Out"}
              </span>
            </div>
            <CalendarIcon className="size-6 text-black/60" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date) => date < new Date()}
          />
        </PopoverContent>
      </Popover>

      <div className="relative flex flex-1 border rounded items-center">
        <Input
          type="number"
          placeholder="Guest"
          className="border-0 placeholder:text-black pr-10 py-6! h-auto! rounded shadow-none focus-visible:ring-0"
        />
        <UserIcon className="absolute right-3 size-6 text-black/60" />
      </div>

      <Button
        className="bg-accent-orange min-w-48 rounded py-6! h-auto! "
        size="lg"
        icon={<SearchIcon className="size-5 text-white" />}
      >
        Search
      </Button>
    </div>
  );
};

export default HeroForm;
