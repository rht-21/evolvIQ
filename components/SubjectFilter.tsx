"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    if (selectedSubject !== "all") {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject,
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
      router.push(newUrl, { scroll: false });
    }
  }, [pathname, router, searchParams, selectedSubject]);

  return (
    <div className="relative h-fit flex items-center gap-2">
      <Select
        value={selectedSubject}
        onValueChange={(value) => setSelectedSubject(value)}
      >
        <SelectTrigger className="w-full capitalize !bg-transparent border border-border cursor-pointer">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="capitalize cursor-pointer">
            All Subjects
          </SelectItem>
          {subjects.map((subject) => (
            <SelectItem
              key={subject}
              value={subject}
              className="capitalize cursor-pointer"
            >
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubjectFilter;
