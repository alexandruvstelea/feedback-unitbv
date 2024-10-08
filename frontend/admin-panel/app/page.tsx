"use client";

import MenuSVG from "@/public/svgs/MenuSVG";
import InfoSVG from "@/public/svgs/InfoSVG";
import FacultyTable from "@/components/Faculties/FacultyTable";
import RoomTable from "@/components/Rooms/RoomTable";
import BuildingTable from "@/components/Buildings/BuildingTable";
import ProgrammeTable from "@/components/Programmes/ProgrammeTable";
import SessionTable from "@/components/Sessions/SessionTable";
import ProfessorTable from "@/components/Professors/ProfessorTable";
import SubjectTable from "@/components/Subjects/SubjectTable";
import WeekTable from "@/components/Weeks/WeekTable";
import CommentTable from "@/components/Comments/CommentTable";
import UserTable from "@/components/Users/UserTabel";

import { useEffect, useState } from "react";
import {
  Faculty,
  Room,
  Session,
  Building,
  Professor,
  Programme,
  Subject,
  Week,
  Comment,
  User,
} from "@/utils/types";

export default function Home(): JSX.Element {
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const [isOpen, setIsOpen] = useState(true);
  const [showList, setShowList] = useState(true);

  const [openTable, setOpenTable] = useState<string | null>("info");
  const [activeTable, setActiveTable] = useState<string | null>(null);

  const fetchWeeks = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/weeks`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setWeeks([]);
        } else {
          throw new Error("Failed to fetch weeks");
        }
      }
      const weeks = await response.json();
      setWeeks(weeks);
    } catch (error) {
      console.error("Error fetching weeks:", error);
    }
  };

  const fetchFaculties = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/faculties`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setFaculties([]);
        } else {
          throw new Error("Failed to fetch faculties");
        }
      }
      const faculties = await response.json();
      setFaculties(faculties);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const fetchBuildings = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/buildings`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setBuildings([]);
        } else {
          throw new Error("Failed to fetch buildings");
        }
      }
      const buildings = await response.json();
      setBuildings(buildings);
    } catch (error) {
      console.error("Error fetching buildings:", error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/rooms`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setRooms([]);
        } else {
          throw new Error("Failed to fetch rooms");
        }
      }
      const rooms = await response.json();
      setRooms(rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchProgrammes = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/programmes`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setProgrammes([]);
        } else {
          throw new Error("Failed to fetch programmes");
        }
      }
      const programmes = await response.json();
      setProgrammes(programmes);
    } catch (error) {
      console.error("Error fetching programmes:", error);
    }
  };

  const fetchProfessors = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/professors`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setProfessors([]);
        } else {
          throw new Error("Failed to fetch professors");
        }
      }
      const professors = await response.json();
      setProfessors(professors);
    } catch (error) {
      console.error("Error fetching professors:", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/subjects`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setSubjects([]);
        } else {
          throw new Error("Failed to fetch subjects");
        }
      }
      const subjects = await response.json();
      setSubjects(subjects);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchSessions = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/sessions`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setSessions([]);
        } else {
          throw new Error("Failed to fetch sessions");
        }
      }
      const sessions = await response.json();
      setSessions(sessions);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/comments`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setComments([]);
        } else {
          throw new Error("Failed to fetch comments");
        }
      }
      const comments = await response.json();
      setComments(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/users`, {
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 404) {
          setUsers([]);
        } else {
          throw new Error("Failed to fetch users");
        }
      }
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleTableToggle = (tableName: string) => {
    if (openTable === tableName) {
      setOpenTable("info");
      setActiveTable(null);
    } else {
      setOpenTable(tableName);
      setActiveTable(tableName);
    }
  };

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchWeeks();
    fetchFaculties();
    fetchBuildings();
    fetchRooms();
    fetchProgrammes();
    fetchProfessors();
    fetchSubjects();
    fetchSessions();
    fetchComments();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowList(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowList(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (openTable === "faculties") fetchFaculties();
    if (openTable === "buildings") fetchBuildings();
    if (openTable === "professors") fetchProfessors();
    if (openTable === "programmes") fetchProgrammes();
    if (openTable === "rooms") fetchRooms();
    if (openTable === "sessions") fetchSessions();
    if (openTable === "subjects") fetchSubjects();
    if (openTable === "weeks") fetchWeeks();
    if (openTable === "comments") fetchComments();
  }, [openTable]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 rounded-r-xl overflow-y-auto transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "-translate-x-[80%]"
        }  bg-gray-800`}
        tabIndex={-1}
      >
        <h5
          className={`text-base font-semibold uppercase text-gray-400 ${
            showList ? "block" : "hidden"
          }`}
        >
          Meniu
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
        >
          <MenuSVG />
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className={`space-y-2 ${showList ? "block" : "hidden"}`}>
            <li>
              <button
                onClick={() => handleTableToggle("weeks")}
                className={`menuButton ${
                  activeTable === "weeks"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Săptămâni
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("faculties")}
                className={`menuButton ${
                  activeTable === "faculties"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Facultăți
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("buildings")}
                className={`menuButton ${
                  activeTable === "buildings"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Clădiri
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("rooms")}
                className={`menuButton ${
                  activeTable === "rooms"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Săli
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("programmes")}
                className={`menuButton ${
                  activeTable === "programmes"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Specializări
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("professors")}
                className={`menuButton ${
                  activeTable === "professors"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Profesori
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("subjects")}
                className={`menuButton ${
                  activeTable === "subjects"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Materii
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("sessions")}
                className={`menuButton ${
                  activeTable === "sessions"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Ore
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("comments")}
                className={`menuButton ${
                  activeTable === "comments"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Comentarii
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTableToggle("users")}
                className={`menuButton ${
                  activeTable === "users"
                    ? "bg-gray-600 text-white"
                    : "text-white"
                }`}
              >
                Users
              </button>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => handleTableToggle("info")}
          className={` bg-transparent rounded-lg text-sm p-1.5 absolute bottom-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white ${
            activeTable === "info" ? "bg-gray-600 text-white" : "text-gray-400"
          }`}
        >
          <InfoSVG />
        </button>
      </div>

      <div
        className={`transition-all ease-in-out duration-300 ${
          isOpen ? "ml-64" : "ml-12"
        } p-4`}
      >
        {openTable === "info" && (
          <div className="text-white">Here goes the info content.</div>
        )}
        {openTable === "weeks" && (
          <WeekTable weeks={weeks} fetchWeeks={fetchWeeks} />
        )}
        {openTable === "faculties" && (
          <FacultyTable
            faculties={faculties}
            buildings={buildings}
            professors={professors}
            programmes={programmes}
            fetchFaculties={fetchFaculties}
          />
        )}
        {openTable === "buildings" && (
          <BuildingTable
            buildings={buildings}
            rooms={rooms}
            faculties={faculties}
            fetchBuildings={fetchBuildings}
          />
        )}
        {openTable === "rooms" && (
          <RoomTable
            rooms={rooms}
            sessions={sessions}
            buildings={buildings}
            fetchRooms={fetchRooms}
          />
        )}
        {openTable === "programmes" && (
          <ProgrammeTable
            programmes={programmes}
            faculties={faculties}
            subjects={subjects}
            fetchProgrammes={fetchProgrammes}
          />
        )}
        {openTable === "professors" && (
          <ProfessorTable
            professors={professors}
            faculties={faculties}
            fetchProfessors={fetchProfessors}
          />
        )}
        {openTable === "subjects" && (
          <SubjectTable
            subjects={subjects}
            programmes={programmes}
            sessions={sessions}
            professors={professors}
            fetchSubjects={fetchSubjects}
          />
        )}
        {openTable === "sessions" && (
          <SessionTable
            sessions={sessions}
            rooms={rooms}
            faculties={faculties}
            subjects={subjects}
            fetchSessions={fetchSessions}
          />
        )}
        {openTable === "comments" && (
          <CommentTable comments={comments} fetchComments={fetchComments} />
        )}
        {openTable === "users" && (
          <UserTable users={users} fetchUsers={fetchUsers} />
        )}
      </div>
    </>
  );
}
