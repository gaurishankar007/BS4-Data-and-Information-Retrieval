db.StudentDetails.insert({
    Student_Number: "1078654X",
    Student_Name: "David Green",
    Course_Code: "G105",
    Course_Title: "BA Business Computing",
    Module: [
        {
            Code: "BUS119", Title: "Business Operations",
            Number_of_Credits: NumberInt(20),
            Grade_Point: NumberInt(10),
            Result_Code: "P",
            Result: "Pass"
        },
        {
            Code: "COM110",
            Title: "Introduction to Computing",
            Number_of_Credits: NumberInt(20),
            Grade_Point: NumberInt(8),
            Result_Code: "P",
            Result: "Pass"
        },
        {
            Code: "COM112",
            Title: "Application Building",
            Number_of_Credits: NumberInt(20),
            Grade_Point: NumberInt(3),
            Result_Code: "RE",
            Result: "Refer Exam"
        },
        {
            Code: "COM114",
            Title: "Software Engineering",
            Number_of_Credits: NumberInt(20),
            Grade_Point: NumberInt(2),
            Result_Code: "DC",
            Result: "Defer Coursework"
        },
        {
            Code: "COM118",
            Title: "Computing Law",
            Number_of_Credits: NumberInt(10),
            Grade_Point: NumberInt(9),
            Result_Code: "P",
            Result: "Pass"
        },        
        {
            Code: "COM120",
            Title: "Systems Analysis",
            Number_of_Credits: NumberInt(20),
            Grade_Point: NumberInt(3),
            Result_Code: "RCE",
            Result: "Refer Coursework and Exam"
        },        
        {
            Code: "COM122",
            Title: "HCI",
            Number_of_Credits: NumberInt(10),
            Grade_Point: NumberInt(7),
            Result_Code: "P",
            Result: "Pass"
        },
    ]
})

db.Instrument.insert([
    {
        Instrument_Type_Code: "S1",
        Name: "Saxophone",
        Supplier_Company: "Butler"
    },
    {
        Instrument_Type_Code: "S8",
        Name: "Drum Kit",
        Supplier_Company: "Solid Beats"
    },
    {
        Instrument_Type_Code: "S2",
        Name: "Electric Guitar",
        Supplier_Company: "Incredible String Sound"
    },
    {
        Instrument_Type_Code: "S11",
        Name: "Acoustic Guitar",
        Supplier_Company: "Incredible String Sound"
    },
    {
        Instrument_Type_Code: "S23",
        Name: "Trumpet",
        Supplier_Company: "Butler"
    },
    {
        Instrument_Type_Code: "S66",
        Name: "Trombone",
        Supplier_Company: "Butler"
    },
    {
        Instrument_Type_Code: "S55",
        Name: "Mandolin",
        Supplier_Company: "Incredible String Sound"
    },
])
    
db.StudentClass.insert([
    {
        Student_Name: "Javad Thomas",
        Student_Type: "Full-time Day",
        Class_Attended: [NumberInt(2), NumberInt(6)]
    },
    {
        Student_Name: "Honey West",
        Student_Type: "Full-time Day",
        Class_Attended: [NumberInt(1), NumberInt(6)]
    },
    {
        Student_Name: "Mary O'Hara",
        Student_Type: "Part-time Day",
        Class_Attended: [NumberInt(7), NumberInt(9)]
    },
    {
        Student_Name: "Sidra Khan",
        Student_Type: "Part-time Evening",
        Class_Attended: [NumberInt(1), NumberInt(7), NumberInt(9)]
    },
    {
        Student_Name: "Chris King",
        Student_Type: "Part-time Evening",
        Class_Attended: [NumberInt(1)]
    },
])

db.StudentDetails.find({})
db.Instrument.find({})
db.StudentClass.find({})