import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type CompanionListProps = {
  title: string;
  companions?: Companion[];
  classNames?: string;
};

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-semibold text-3xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className="w-2/3">Lessons</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, name, subject, duration, topic }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companion/${id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        backgroundColor: getSubjectColor(subject),
                      }}
                      className="p-4 flex items-center justify-center rounded-lg max-md:hidden"
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt="Subject"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl font-semibold">{name}</p>
                      <p>Topic: {topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt="Subject"
                    width={20}
                    height={20}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-xl">
                    {duration} <span className="max-md:hidden">mins</span>
                  </p>
                  <IconClock size={16} className="md:hidden" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
