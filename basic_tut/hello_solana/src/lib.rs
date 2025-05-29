// Required Solana program imports
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

// The actual logic of your Solana program
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    // Log the program ID to the Solana log output
    msg!("Program ID: {:?}", program_id);

    // For now, this program does nothing else
    Ok(())
}

// Register the entrypoint with the Solana runtime
entrypoint!(process_instruction);
