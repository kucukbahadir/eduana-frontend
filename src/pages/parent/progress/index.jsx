import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, LoaderCircle, RefreshCcw } from "lucide-react";
import React, { useState } from "react";

import Card from "./components/Card";
import Chart from "./components/Chart";
import Courses from "./components/Courses";
import ProgressCategory from "./components/ProgressCategory";
import Statistic from "./components/Statistic";
import BarStatistic from "./components/BarStatistic";

import { students as data } from "./data/studentData"; // simulating real data

function Progress() {
  const [students, setStudents] = useState(data);

  function refreshData() {
    setStudents(null);
    setTimeout(() => setStudents(data), 1000);
  }

  return (
    <div className="flex flex-col gap-5 py-4 px-5 max-w-5xl mx-auto">
        <h1>Progress</h1>
        {students == null ? (
          <div className="flex text-muted-foreground items-center gap-2.5">
            <LoaderCircle className="animate-spin" size={18} />
            <span>Loading...</span>
          </div>
        ) : (
          <Tabs defaultValue={students[0].name} className={"w-full"}>
            {students.length > 1 && (
              <div className="flex w-full items-center justify-between">
                <TabsList className={`w-full max-w-xl`}>
                  {students.map((student) => (
                    <TabsTrigger key={student.name} value={student.name}>
                      {student.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <Button variant="link" onClick={refreshData} className={"h-fit gap-2 hidden lg:inline-flex"}>
                  <RefreshCcw className="hidden lg:inline-flex" /> Refresh
                </Button>
              </div>
            )}
            {students.map((student, i) => (
              <TabsContent className={"flex flex-col lg:flex-row gap-2.5"} value={student.name} key={student.name}>
                <Card title={`${student.name}'s progress`} className={"min-w-sm"}>
                  <div className="flex flex-col bg-muted rounded-md p-2.5">
                    <div className="grid grid-cols-3 gap-2.5">
                      <ProgressCategory title="To do" progress={student.progress.todo} variant="chart-3" />
                      <ProgressCategory title="In progress" progress={student.progress.inProgress} variant="chart-2" />
                      <ProgressCategory title="Done" progress={student.progress.done} variant="chart-1" />
                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Average task completion rate: </span>
                      <Badge variant="success">
                        <ArrowUp /> {student.progress.averageTaskCompletionRate}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium text-muted-foreground">Upcoming class: </span>
                      <Badge variant="subtle">
                        {student.progress.upcomingClass.getDate()}{" "}
                        {student.progress.upcomingClass.toLocaleString("default", { month: "short" })}
                      </Badge>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <Chart student={student} />
                    <div className="flex items-center justify-center gap-2.5">
                      <Badge variant={"warning"}>To do</Badge>
                      <Badge variant={"success"}>In progress</Badge>
                      <Badge variant={"primary"}>Done</Badge>
                    </div>
                  </div>
                </Card>

                <div className="flex flex-col gap-2.5 w-full">
                  <Card title="Overview">
                    <div className="grid grid-cols-3 gap-2.5">
                      <Statistic value={student.statistics.lessonTime} lead="minutes of lesson time" />
                      <Statistic value={student.statistics.totalLessons} lead="lessons in total" />
                      <Statistic value={student.statistics.completedCourses} lead="completed courses" />
                      <Statistic value={student.statistics.soloProjects} lead="solo projects" />
                      <Statistic value={student.statistics.groupProjects} lead="group projects" />
                      <Statistic value={student.statistics.totalClasses} lead="classes attended" />
                    </div>
                  </Card>

                  <Card title="Programming skills">
                    {Object.entries(student.skills).map(([skill, amount]) => (
                      <BarStatistic key={skill} subject={skill} amount={amount} capitalize={skill == "html5"} />
                    ))}
                  </Card>

                  <Card title="Courses">
                    <Courses courses={student.courses} />
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
    </div>
  );
}

export default Progress;
