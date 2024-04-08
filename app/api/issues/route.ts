import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"

// for validation using zod Define shape of the object and body
const createIssueScheme = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
})

export async function POST(request: NextRequest) {

    const response = await request.json();

    // validation the object/Schema  using safeparse
    const validation = createIssueScheme.safeParse(response);


    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    // to store the data/issue in database need to import prisma client (single instance)
    // otherwise it will show error
    // stored using prisma.issue.create/delete/update

    const newIssue = await prisma.issue.create({
        data: { title: response.title, description: response.description }
    })
    return NextResponse.json(newIssue, { status: 201 })

}