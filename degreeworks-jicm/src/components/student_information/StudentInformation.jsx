import React from 'react';
import './StudentInformation.css';

function StudentInformation () {
    return (
        <div>
            <table>
                <tr>
                    <th className="student-information-attribute">Student Name</th>
                    <th className="student-information-value">John Snow</th>
                    <th className="student-information-attribute">Student ID</th>
                    <th className="student-information-value">U2976322</th>
                </tr>
                <tr>
                    <th className="student-information-attribute">College/Department</th>
                    <th className="student-information-value">Engineering</th>
                    <th className="student-information-attribute">Major</th>
                    <th className="student-information-value">Computer Science</th>
                </tr>
                <tr>
                    <th className="student-information-attribute">USF Hours</th>
                    <th className="student-information-value">25</th>
                    <th className="student-information-attribute">USF GPA</th>
                    <th className="student-information-value">3.66</th>
                </tr>
            </table>
        </div>
    )
}

export default StudentInformation;