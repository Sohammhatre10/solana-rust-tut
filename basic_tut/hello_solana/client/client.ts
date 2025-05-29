import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";


console.log(pg.PROGRAM_ID.toString());

const blockhashInfo = await pg.connection.getLatestBlockhash();
console.log("Blockhash Info:", blockhashInfo);

const tx = new Transaction({
  ...blockhashInfo,
});

tx.add(
  new TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [], // Add necessary accounts here
    data: Buffer.from([]), // Provide proper serialized data
  })
);

// Use wallet adapter for real applications
tx.sign(pg.wallet.keypair);

try {
  const txHash = await pg.connection.sendRawTransaction(tx.serialize());
  console.log("Transaction Hash:", txHash);
} catch (err) {
  console.error("Transaction Failed:", err);
}
