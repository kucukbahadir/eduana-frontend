import { useState, useEffect } from "react";

const STORAGE_KEY = "classManagement";

const ClassManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for A-Z, 'desc' for Z-A
  const [classes] = useState(() => {
    const savedClasses = localStorage.getItem(STORAGE_KEY);
    return savedClasses
      ? JSON.parse(savedClasses)
      : [
        { id: 1, name: "NLAMS02-20250106-RC-00300", location: "Amsterdam Oost", course: "Essential Robotics Skills", period: "1", level: "1"},
        { id: 2, name: "NLDH01-20240102-CC-02000", location: "Amsterdam Oost", course: "Essential Robotics Skills", period: "1", level: "2"},
        { id: 3, name: "NLAMS02-20250106-RC-00300", location: "Amsterdam Oost", course: "Essential Robotics Skills", period: "1", level: "1"},
        { id: 4, name: "NLAMS02-20250106-RC-00300", location: "Amsterdam Oost", course: "Essential Robotics Skills", period: "1", level: "2"},
        { id: 5, name: "NLAMS02-20250106-RC-00300", location: "Amsterdam Oost", course: "Essential Robotics Skills", period: "1", level: "2"},
      ];
  });

  // Save classes to localStorage on update
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
  }, [classes]);

  // Handle search filtering
  const filteredClasses = classes.filter((clas) =>
    clas.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered classes based on sortOrder (A-Z or Z-A)
  const sortedClasses = [...filteredClasses].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name); // Sort A-Z
    } else {
      return b.name.localeCompare(a.name); // Sort Z-A
    }
  });

  return (
    <div className="p-6 bg-muted min-h-screen">
      <div className="max-w-5xl mx-auto bg-background p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Class Management</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search classes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        {/* Sorting Dropdown */}
        <div className="mb-4">
          <label htmlFor="sortOrder" className="mr-2">Sort By:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        {/* Class Table */}
        <table className="w-full border border-border rounded-lg overflow-hidden">
          <thead className="bg-muted text-primary uppercase text-sm">
          <tr>
            <th className="p-3 text-left">NAME</th>
            <th className="p-3 text-left">LOCATION</th>
            <th className="p-3 text-left">COURSE</th>
            <th className="p-3 text-left">PERIOD</th>
            <th className="p-3 text-left">LEVEL</th>
          </tr>
          </thead>
          <tbody>
          {sortedClasses.length > 0 ? (
            sortedClasses.map((clas) => (
              <tr key={clas.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{clas.name}</td>
                <td className="p-3">{clas.location}</td>
                <td className="p-3">{clas.course}</td>
                <td className="p-3">{clas.period}</td>
                <td className="p-3">{clas.level}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted-foreground p-4">
                No classes found.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassManagement;
