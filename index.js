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
      // console.log("invoke list");
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      // console.log("invoke getById", id);
      await getContactById(id);
      break;
    case "remove":
      // console.log("invoke remove", id);
      await removeContact(id);
      const contacts2 = await listContacts();
      console.table(contacts2);

      break;
    case "add":
      // console.log("invoke add", name, email, phone);
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

// program.command("add <name, email, phone>").action((...options) => {
//   const [name, email, phone] = options;
//   console.log(phone);
//   invokeAction({
//     action: "add",
//     name,
//     email,
//     phone,
//   });
// });

// program.command("list").action((options) => {
//   invokeAction({
//     action: "list",
//   });
// });

// program.command("get <id>").action((options) => {
//   const id = options;

//   invokeAction({
//     action: "get",
//     id: id,
//   });
// });
// program.command("remove <id>").action((options) => {
//   const id = options;

//   invokeAction({
//     action: "remove",
//     id: id,
//   });
// });
// program.parse();

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id:"1" });
// invokeAction({ action: "remove", id: "1" });
// invokeAction({
//   action: "add",
//   name: "Messi",
//   email: "lionel@antonella.com",
//   phone: "+39 039 999 99 99",
// });

// const [, , action] = process.argv;
// console.log(process.argv);
// switch (action) {
//   case "list":
//     invokeAction({ action });
//     break;
//   case "get":
//     const [, , , id] = process.argv;
//     invokeAction({ action, id });
//     break;
//   case "remove":
//     const [, , , id] = process.argv;
//     invokeAction({ action, id });
//     break;
//   case "add":
//     const [, , , name, email, phone] = process.argv;
//     invokeAction({ action, name, email, phone });
//     break;

//   default:
//     break;
// }

// const program = new Command();
