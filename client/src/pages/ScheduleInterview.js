import Select from "react-select";
import moment from "moment";
import axios from "axios";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar/Sidebar";

import useGetAllUsers from "../hooks/useGetAllUsers";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ScheduleInterview = () => {
  useDocumentTitle("Schedule Interview");

  const navigate = useNavigate();

  const {
    status: getUsersStatus,
    data: getUsersData,
    error: getUsersError,
  } = useGetAllUsers();

  const [participants, setParticipants] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [resume, setResume] = useState("");

  const animatedComponents = makeAnimated();

  const getParticipants = () => {
    const users = [];
    getUsersData?.users.forEach((user) => {
      users.push({ label: user.email, value: user.email });
    });
    return users;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitting(true);

    const users = [];
    participants.forEach((participant) => users.push(participant.value));

    const formattedStartTime = moment(
      `${date} ${startTime}`,
      "YYYY-MM-DD HH:mm:ss"
    ).format();
    const formattedendTime = moment(
      `${date} ${endTime}`,
      "YYYY-MM-DD HH:mm:ss"
    ).format();

    const interview = new FormData();
    interview.append("usersInvited", users);
    interview.append("startTime", formattedStartTime);
    interview.append("endTime", formattedendTime);

    if (resume != "") {
      interview.append("resume", resume);
    }

    axios
      .post("/api/interviews/", interview)
      .then((res) => {
        setIsFormSubmitting(false);
        alert("Interview was successfully added.");
        navigate("/upcoming");
      })
      .catch((error) => {
        setIsFormSubmitting(false);
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <SideBar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12">
          <div className="flex flex-col">
            <h2 className="text-xl text-center font-medium mb-4">
              Schedule A New Interview
            </h2>
            {getUsersStatus === "error" && (
              <div> Error fetching all users. </div>
            )}
            {getUsersStatus === "loading" && <div> Loading... </div>}
            {getUsersStatus === "success" && (
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label>Select Participants : </label>
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="participants"
                  options={getParticipants()}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(selectedOption) => {
                    setParticipants(selectedOption);
                  }}
                />

                <label className="mt-4 w-full">Date : </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="rounded-md"
                />

                <label className="mt-4">Start Time : </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  className="rounded-md"
                />

                <label className="mt-4">End Time : </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  className="rounded-md"
                />

                <label className="mt-4">Upload Resume : </label>
                <input
                  name="resume"
                  onChange={(e) => setResume(e.target.files[0])}
                  id="resume"
                  type="file"
                  accept="application/pdf"
                />

                <button
                  type="submit"
                  className="btn mx-auto mt-6 bg-blue-500 text-white"
                  disabled={isFormSubmitting}
                >
                  {isFormSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ScheduleInterview;
