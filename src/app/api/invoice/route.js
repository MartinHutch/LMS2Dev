import { NextResponse } from "next/server";

let invoceLists = [
  {
    id: 101,
    billFrom: "Cambridge Professional Academy",
    billFromEmail: "info@cpa.com",
    billFromAddress: "St Johns Innovation Centre",
    billFromPhone: 1223454744,
    billFromFax: 13,
    billTo: "Darren Woods",
    billToEmail: "darrenseanwoods@hotmail.com",
    billToAddress: "127 Ditton Lane, Cambridge CB5 8SS",
    billToPhone: 7590637721,
    billToFax: 76,
    orders: [
      {
        itemName: "Marketing Fundamentals",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Shipped",
    completed: false,
    isSelected: false,
  },
  {
    id: 102,
    billFrom: "Cambridge Professional Academy",
    billFromEmail: "info@cpa.com",
    billFromAddress: "St Johns Innovation Centre",
    billFromPhone: 1223454744,
    billFromFax: 13,
    billTo: "Synapture Ltd.",
    billToEmail: "info@synapture.co.uk",
    billToAddress: "127 Ditton Lane, Cambridge CB5 8SS",
    billToPhone: 7590637721,
    billToFax: 76,
    orders: [
      {
        itemName: "How to Sell the Steak",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Delivered",
    completed: false,
    isSelected: false,
  },
  {
    id: 103,
    billFrom: "Cambridge Professional Academy",
    billFromEmail: "info@cpa.com",
    billFromAddress: "St Johns Innovation Centre",
    billFromPhone: 1223454744,
    billFromFax: 13,
    billTo: "Synapture Ltd.",
    billToEmail: "info@synapture.co.uk",
    billToAddress: "127 Ditton Lane, Cambridge CB5 8SS",
    billToPhone: 7590637721,
    billToFax: 76,
    orders: [
      {
        itemName: "SEO for Marketeers",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Pending",
    completed: false,
    isSelected: false,
  }
];
// Reset InvoiceList
const resetInvoiceList = [...invoceLists];

// Endpoint to get all invoice
export async function GET(req) {
  let isBrowserRefreshed = req.headers.get("browserrefreshed");
  try {
    if (isBrowserRefreshed === "false") {
      return NextResponse.json({
        status: 200,
        msg: "Success",
        data: invoceLists,
      });
    } else {
      invoceLists = resetInvoiceList;
      return NextResponse.json({
        status: 200,
        msg: "Success",
        data: resetInvoiceList,
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

// Endpoint to delete an invoice
export async function DELETE(req) {
  try {
    const { invoiceId } = await req.json();
    const invoiceIndex = invoceLists.findIndex(
      (invoice) => invoice.id === invoiceId
    );
    if (invoiceIndex !== -1) {
      const remainingInvoice = invoceLists.filter(
        (invoice) => invoice.id !== invoiceId
      );
      invoceLists = remainingInvoice;
      return NextResponse.json({
        status: 200,
        msg: "success",
        data: invoceLists,
      });
    } else {
      return NextResponse.json({ status: 400, msg: "invoice not found" });
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      msg: "Internal server error",
      error,
    });
  }
}

const getNextId = () => {
  const maxId = Math.max(...invoceLists.map((invoice) => invoice.id));
  return maxId + 1;
};

// Endpoint to add an invoice
export async function POST(req) {
  try {
    const newInvoice = await req.json();
    newInvoice.id = getNextId();
    invoceLists.push(newInvoice);
    return NextResponse.json({
      status: 200,
      msg: "success",
      data: invoceLists,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      msg: "Internal server error",
      error,
    });
  }
}

// Endpoint to update an invoice
export async function PUT(req) {
  try {
    const updatedInvoice = await req.json();
    const invoiceIndex = invoceLists.findIndex(
      (invoice) => invoice.id === updatedInvoice.id
    );

    if (invoiceIndex !== -1) {
      invoceLists[invoiceIndex] = { ...updatedInvoice };
      return NextResponse.json({
        status: 200,
        msg: "success",
        data: invoceLists,
      });
    } else {
      return NextResponse.json({ status: 400, msg: "Invoice not found" });
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      msg: "Internal server error",
      error,
    });
  }
}
