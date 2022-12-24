const { nanoid } = require("nanoid");

const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("../goit-node-hw-01/db", "contacts.json");

async function listContacts() {
  try {
    const contactsRaw = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contacts = JSON.parse(contactsRaw);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = await contacts.find(
      (contact) => contact.id === contactId.toString()
    );

    return contactById;
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

async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name, email, phone };
  try {
    const contacts = await listContacts();
    contacts.push(contact);
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
