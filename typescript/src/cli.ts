
import { AptosParserRepo, getTypeTagFullname, StructTag, parseTypeTagOrThrow, u8, u64, u128, print, strToU8, u8str, DummyCache } from "@manahippo/move-to-ts";
import { AptosAccount, AptosClient, HexString, Types } from "aptos";
import { Command } from "commander";
import { getProjectRepo } from "./";
import * as fs from "fs";
import * as yaml from "yaml";
import * as coin_registry$_ from './coin_registry';

export const readConfig = (program: Command) => {
  const {config, profile} = program.opts();
  const ymlContent = fs.readFileSync(config, {encoding: "utf-8"});
  const result = yaml.parse(ymlContent);
  //console.log(result);
  if (!result.profiles) {
    throw new Error("Expect a profiles to be present in yaml config");
  }
  if (!result.profiles[profile]) {
    throw new Error(`Expect a ${profile} profile to be present in yaml config`);
  }
  const url = result.profiles[profile].rest_url;
  const privateKeyStr = result.profiles[profile].private_key;
  if (!url) {
    throw new Error(`Expect rest_url to be present in ${profile} profile`);
  }
  if (!privateKeyStr) {
    throw new Error(`Expect private_key to be present in ${profile} profile`);
  }
  const privateKey = new HexString(privateKeyStr);
  const client = new AptosClient(result.profiles[profile].rest_url);
  const account = new AptosAccount(privateKey.toUint8Array());
  console.log(`Using address ${account.address().hex()}`);
  return {client, account};
}

export async function sendPayloadTx(
  client: AptosClient,
  account: AptosAccount,
  payload: Types.TransactionPayload,
  max_gas=1000
){
  const txnRequest = await client.generateTransaction(account.address(), payload, {max_gas_amount: `${max_gas}`});
  const signedTxn = await client.signTransaction(account, txnRequest);
  const txnResult = await client.submitTransaction(signedTxn);
  await client.waitForTransaction(txnResult.hash);
  const txDetails = (await client.getTransaction(txnResult.hash)) as Types.UserTransaction;
  console.log(txDetails);
}

const program = new Command();

program
  .name('move-ts-cli')
  .description('Move TS CLI generated by move-to-ts')
  .requiredOption('-c, --config <path>', 'path to your aptos config.yml (generated with "aptos init")')
  .option('-p, --profile <PROFILE>', 'aptos config profile to use', 'default')


const coin_registry_add_token_script = async (TokenType: string, name: string, symbol: string, description: string, decimals: string, logo_url: string, project_url: string) => {
  const {client, account} = readConfig(program);
  const TokenType_ = parseTypeTagOrThrow(TokenType);
  const name_ = strToU8(name);
  const symbol_ = strToU8(symbol);
  const description_ = strToU8(description);
  const decimals_ = u8(decimals);
  const logo_url_ = strToU8(logo_url);
  const project_url_ = strToU8(project_url);
  const payload = coin_registry$_.coin_registry$_.buildPayload_add_token_script(name_, symbol_, description_, decimals_, logo_url_, project_url_, [TokenType_]);
  await sendPayloadTx(client, account, payload);
}

program
  .command("coin_registry:add-token-script")
  .description("Add new token into registry")
  .argument('<TYPE_TokenType>')
  .argument('<name>')
  .argument('<symbol>')
  .argument('<description>')
  .argument('<decimals>')
  .argument('<logo_url>')
  .argument('<project_url>')
  .action(coin_registry_add_token_script);


const coin_registry_delist_token_script = async (symbol: string) => {
  const {client, account} = readConfig(program);
  const symbol_ = strToU8(symbol);
  const payload = coin_registry$_.coin_registry$_.buildPayload_delist_token_script(symbol_);
  await sendPayloadTx(client, account, payload);
}

program
  .command("coin_registry:delist-token-script")
  .description("Delist token")
  .argument('<symbol>')
  .action(coin_registry_delist_token_script);


const coin_registry_initialize_script = async () => {
  const {client, account} = readConfig(program);

  const payload = coin_registry$_.coin_registry$_.buildPayload_initialize_script();
  await sendPayloadTx(client, account, payload);
}

program
  .command("coin_registry:initialize-script")
  .description("Create token registry for signer")

  .action(coin_registry_initialize_script);


const coin_registry_update_token_info_script = async (symbol: string, description: string, logo_url: string, project_url: string) => {
  const {client, account} = readConfig(program);
  const symbol_ = strToU8(symbol);
  const description_ = strToU8(description);
  const logo_url_ = strToU8(logo_url);
  const project_url_ = strToU8(project_url);
  const payload = coin_registry$_.coin_registry$_.buildPayload_update_token_info_script(symbol_, description_, logo_url_, project_url_);
  await sendPayloadTx(client, account, payload);
}

program
  .command("coin_registry:update-token-info-script")
  .description("Update registry info of existing token")
  .argument('<symbol>')
  .argument('<description>')
  .argument('<logo_url>')
  .argument('<project_url>')
  .action(coin_registry_update_token_info_script);




program.parse();
