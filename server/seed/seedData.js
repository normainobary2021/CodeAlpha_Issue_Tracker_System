import * as Permissions from "../util/constants.js";

export const DBUsers = [
    {
        firstName: "Norman",
        lastName: "Ainobushoborozi",
        email: "norman.ainobushoborozi@gmail.com",
        password: "password"
    },
    {
        firstName: "Nelson",
        lastName: "Ainomugisha",
        email: "nellybaryaija@gmail.com",
        password: "password"
    },
    {
        firstName: "Robert",
        lastName: "Kayanja",
        email: "robert.kayanja@gmail.com",
        password: "password"
    }
];

export const DBRole = [
    {
        name: "Admin",
        permissions: [
            Permissions.MANAGE_TICKET,
            Permissions.MANAGE_PROJECT,
            Permissions.MANAGE_ADMIN_PAGE
        ]
    },
    {
        name: "Developer",
        permissions: [
            Permissions.MANAGE_TICKET,
            Permissions.MANAGE_PROJECT,
        ]
    },
    {
        name: "Submitter",
        permissions: [
            Permissions.MANAGE_TICKET,
        ]
    },
];

export const DBTicketType = [
    {
        name: "Feature",
        iconName: "BsPlusLg",
        colour: "#4ab577"
    },
    {
        name: "Bug",
        iconName: "BsBugFill",
        colour: "#e25555"
    },
    {
        name: "Documentation",
        iconName: "BsFileEarmarkText",
        colour: "#ED8936",
    },
    {
        name: "Support",
        iconName: "BsQuestion",
        colour: "#4299E1",
    }
];