import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

export default function AddEducation({
  onAddEducation,
  isActive,
  toggleActive,
}) {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  return (
    <>
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="education">
            <Icon path={mdiPlus} size={1} />

            <h1>Add Education</h1>
          </div>
          <label htmlFor="school">
            School:
            <input
              type="text"
              id="school"
              placeholder="e.g. Christian-Albrechts-Universität"
              value={education.school}
              onChange={(e) => {
                const newEducation = { ...education, school: e.target.value };
                setEducation(newEducation);
              }}
            />
          </label>
          <label htmlFor="degree">
            Degree:
            <input
              type="text"
              id="degree"
              placeholder="e.g. Bachelor of Science"
              value={education.degree}
              onChange={(e) => {
                const newEducation = { ...education, degree: e.target.value };
                setEducation(newEducation);
              }}
            />
          </label>
          <label htmlFor="startDateEdu">
            Start Date:
            <input
              type="tel"
              id="startDateEdu"
              placeholder="e.g. 09/2020"
              value={education.startDate}
              onChange={(e) => {
                const newEducation = {
                  ...education,
                  startDate: e.target.value,
                };
                setEducation(newEducation);
              }}
            />
          </label>
          <label htmlFor="endDateEdu">
            End Date:
            <input
              type="text"
              id="endDateEdu"
              placeholder="e.g. 09/2023"
              value={education.endDate}
              onChange={(e) => {
                const newEducation = { ...education, endDate: e.target.value };
                setEducation(newEducation);
              }}
            />
          </label>
          <label htmlFor="locationEdu">
            Location:
            <input
              type="text"
              id="locationEdu"
              placeholder="e.g. Kiel, Germany"
              value={education.location}
              onChange={(e) => {
                const newEducation = { ...education, location: e.target.value };
                setEducation(newEducation);
              }}
            />
          </label>
          <div className="button">
            <button
              className="save"
              onClick={() => {
                onAddEducation(education);
                toggleActive();
              }}
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}
