import { join, resolve } from "path";
import moduleAlias from "module-alias";

const files = resolve(__dirname, "../..");

moduleAlias.addAliases({
  "@src": join(files, "src"),
  "@test": join(files, "test"),
});

console.log({
  "@src": join(files, "src"),
  "@test": join(files, "test"),
});
