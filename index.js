const { MongoClient } = require("mongodb");

async function main() {
  // Connection URI
  const uri = "mongodb://localhost:27017";

  // Database Name
  const dbName = "student_database";

  // Sample data
  const academicData = [
    {
      student_id: "001",
      name: "John Doe",
      grades: { Math: "A", Science: "B", History: "A" },
      subjects: ["Math", "Science", "History"],
      other_pertinent_info: "Class Topper",
    },
    {
      student_id: "002",
      name: "Jane Smith",
      grades: { Math: "B", Science: "A", History: "C" },
      subjects: ["Math", "Science", "History"],
      other_pertinent_info: "",
    },
    {
        student_id: "003",
        name: "Jaya",
        grades: { Math: "C", Science: "B", History: "C" },
        subjects: ["Math", "Science", "History"],
        other_pertinent_info: "",
      },
      {
        student_id: "004",
        name: "Ramakrishna",
        grades: { Math: "A", Science: "B", History: "C" },
        subjects: ["Math", "Science", "History"],
        other_pertinent_info: "",
      },
  ];

  const cocurricularData = [
    {
      student_id: "001",
      name: "John Doe",
      activity_type: "Sports",
      duration: "2 years",
      achievements: [
        "1st place in Football Tournament",
        "2nd place in Basketball Championship",
      ],
    },
    {
      student_id: "002",
      name: "Jane Smith",
      activity_type: "Music",
      duration: "3 years",
      achievements: [
        "Performed in School Orchestra",
        "Won Vocal Solo Competition",
      ],
    },
    {
        student_id: "003",
        name: "Jaya",
        activity_type: "Music",
        duration: "3 years",
        achievements: [
          "Performed in School Orchestra",
          "Won Vocal Solo Competition",
        ],
      },
      {
        student_id: "004",
        name: "Ramakrishna",
        activity_type: "Music",
        duration: "3 years",
        achievements: [
          "Performed in School Orchestra",
          "Won Vocal Solo Competition",
        ],
      },
  ];

  // Create a new MongoClient
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");

    // Get the database
    const db = client.db(dbName);

    // Insert sample data into academic records collection
    // await db.collection("academic_records").insertMany(academicData);

    // Insert sample data into co-curricular activities collection
    // await db.collection("cocurricular_activities").insertMany(cocurricularData);

    // Read all academic records
    // const academicRecords = await db
    //   .collection("academic_records")
    //   .find()
    //   .toArray();
    // console.log("Academic Records:", academicRecords);

    // Update co-curricular activity duration for a student
    // await db
    //   .collection("cocurricular_activities")
    //   .updateOne({ student_id: "001" }, { $set: { duration: "4 years" } });

    // Delete academic record for a student
    await db.collection("academic_records").deleteOne({ student_id: "004" });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the client
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

main().catch(console.error);
