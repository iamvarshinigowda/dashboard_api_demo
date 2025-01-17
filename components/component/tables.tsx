/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0HpFEFTUrZh
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function tables() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <div className="relative w-[200px]">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input className="pl-8 w-full" placeholder="Search" type="search" />
        </div>
        <div className="ml-auto space-x-2">
          <Button size="icon">
            <DownloadIcon className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
          <Button size="icon">
            <CalendarIcon className="h-4 w-4" />
            <span className="sr-only">Calendar</span>
          </Button>
          <Button size="icon">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      <div className="border rounded-lg shadow-sm p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[100px]">Rate Float</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">USD</TableCell>
              <TableCell>$</TableCell>
              <TableCell>1.00</TableCell>
              <TableCell>United States Dollars</TableCell>
              <TableCell>1.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">EUR</TableCell>
              <TableCell>€</TableCell>
              <TableCell>0.85</TableCell>
              <TableCell>Euro</TableCell>
              <TableCell>0.85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">GBP</TableCell>
              <TableCell>£</TableCell>
              <TableCell>0.72</TableCell>
              <TableCell>British Pounds</TableCell>
              <TableCell>0.72</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">JPY</TableCell>
              <TableCell>¥</TableCell>
              <TableCell>110.00</TableCell>
              <TableCell>Japanese Yen</TableCell>
              <TableCell>110.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AUD</TableCell>
              <TableCell>A$</TableCell>
              <TableCell>1.30</TableCell>
              <TableCell>Australian Dollars</TableCell>
              <TableCell>1.30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
