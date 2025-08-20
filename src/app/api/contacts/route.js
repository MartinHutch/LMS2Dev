
import { Chance } from "chance";
import { NextResponse } from "next/server";

const chance = new Chance();

let ContactList = [
  {
    id: 1,
    firstname: "Martin",
    lastname: "Hutchins",
    image: "/images/profile/user-2.jpg",
    department: "Board",
    company: "CPA",
    phone: "01223 454744",
    email: "info@cpa.com",
    address: "Cambridge",
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 2,
    firstname: "Darren",
    lastname: "Woods",
    image: "/images/profile/user-3.jpg",
    department: "Support",
    company: "Synapture Ltd",
    phone: "07590637721",
    email: "darren@synapture.co.uk",
    address: "127 Ditton Lane, Fen Ditton, CB5 8SS",
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 3,
    firstname: "Hayley",
    lastname: "Wesley",
    image: "/images/profile/user-4.jpg",
    department: "Learning Engineering",
    company: "CPA",
    phone: "01223 454744",
    email: "info@cpa.com",
    address: "Cambridgeshire",
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },

];
const resetContacts = [...ContactList];

export async function GET(req) {
  let isBrowserRefreshed = req.headers.get("browserrefreshed");
  try {
    if (isBrowserRefreshed === "false") {
      return NextResponse.json({
        status: 200,
        msg: "Success",
        data: ContactList,
      });
    } else {
      ContactList = resetContacts;
      return NextResponse.json({
        status: 200,
        msg: "Success",
        data: resetContacts,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      msg: "Internal server error",
      error,
    });
  }
}


export async function POST(req) {
  try {
    let newContact = await req.json();
    newContact.id = ContactList.length + 1;
    ContactList.push(newContact);
    return NextResponse.json({
      status: 200,
      msg: "success",
      data: ContactList,
    });
  } catch (error) {
    return NextResponse.json({ status: 400, msg: "failed", data: error });
  }
}

export async function DELETE(req) {
  try {
    const { data } = await req.json();
    let contactId = data.contactId;
    const contactIndex = ContactList.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex !== -1) {
      ContactList = ContactList.filter((contact) => contact.id !== contactId);
      return NextResponse.json({
        status: 200,
        msg: "success",
        data: ContactList,
      });
    } else {
      return NextResponse.json({ status: 404, msg: "Contact not found" });
    }
  } catch (error) {
    return NextResponse.json({ status: 400, msg: "failed", data: error });
  }
}

export async function PUT(req) {
  try {
    const updatedContactData = await req.json();
    const updatedContactIndex = ContactList.findIndex(
      (contact) => contact.id === updatedContactData.id
    );
    if (updatedContactIndex !== -1) {
      ContactList[updatedContactIndex] = {
        ...ContactList[updatedContactIndex],
        ...updatedContactData,
      };
      return NextResponse.json({
        status: 200,
        msg: "success",
        data: ContactList,
      });
    } else {
      return NextResponse.json({ status: 404, msg: "Contact not found" });
    }
  } catch (error) {
    return NextResponse.json({ status: 400, msg: "failed", data: error });
  }
}
