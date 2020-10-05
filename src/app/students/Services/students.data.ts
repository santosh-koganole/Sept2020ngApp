export interface Student {
    StudentId: number;
    FirstName :string;
    LastName: string;
    MobileNo: string;
    EmailId:string;
    Address:Address
};

export interface Address{
 AddressId: number;
 AddLine1: string;
 AddLine2: string;
 AddLine3: string;
 City : string;
 State: string
}

export const students:Student[]=[

    {
        StudentId :1,
        FirstName: "Santosh",
        LastName: "Koganole",
        MobileNo: "+91-8867793338",
        EmailId: "santosh.koganole@gmail.com",
        Address:{
            AddressId :1,
            AddLine1: "S.B.KHOT",
            AddLine2:"Behind Govt Hospital",
            AddLine3:"Kagwad",
            City: "Kagwad",
            State:"Karnataka"
        }

    },
    {
        StudentId :2,
        FirstName: "Vineet",
        LastName: "Doddamani",
        MobileNo: "+91-8867793378",
        EmailId: "vinnet@gmail.com",
        Address:{
            AddressId :2,
            AddLine1: "Vineet",
            AddLine2:"Behind Govt School",
            AddLine3:"Dharwad",
            City: "Dharwad",
            State:"Karnataka"
        }

    }
]