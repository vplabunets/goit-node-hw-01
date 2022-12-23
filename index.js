const { program } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      await getContactById(id);
      break;
    case "remove":
      await removeContact(id);
      const contacts2 = await listContacts();
      console.table(contacts2);

      break;
    case "add":
      await addContact(name, email, phone);
      const contacts3 = await listContacts();
      console.table(contacts3);
      break;
    default:
      throw new Error(`unknown action, got: ${action}`);
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);
