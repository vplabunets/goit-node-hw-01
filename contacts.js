const { nanoid } = require("nanoid");

const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("../goit-node-hw-01/db", "contacts.json");

async function listContacts() {
  const contactsRaw = await fs.readFile(contactsPath, { encoding: "utf8" });
  try {
    const contacts = JSON.parse(contactsRaw);
    // console.table(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = await contacts.filter(
      (contact) => contact.id === contactId.toString()
    );
    console.log(contactById[0]);
    return contactById[0];
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const updatedContacts = await contacts.filter(
    (contact) => contact.id !== contactId.toString()
  );
  await writeContacts(updatedContacts);
}

// function addContact(name, email, phone) {
//   const id = nanoid();
//   const contactsPath = path.resolve("../goit-node-hw-01/db", "contacts.json");
//   fs.appendFile(
//     contactsPath,
//     ` { id: nan name: ${name}, email: ${email}, phone: ${phone} }`,
//     { encoding: "utf8" }
//   )
//     .then()
//     .catch((err) => console.log(err.message));
// }
async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name, email, phone };
  try {
    const contacts = await listContacts();
    contacts.push(contact);
    // console.log(contacts);
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
