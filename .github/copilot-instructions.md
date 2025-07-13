Make sure not to use “any” in typescript. Reviewer should check for “any” in the code.
Always have API level test cases for your PR’s.
Always check the vulnerability in code
Check the security of the code
Make sure to write function descriptions above code only for service files.
Example:

 /**
   * Update an existing `Job`.
   *
   * @param {string} id - `Job` Id that need to be updated.
   * @param {JobStatus} status - New `Job` status.
   * @param {string} progress - Updated `Job` progress percentage.
   * @param {string} errMsg - (Optional) Error message.
   * @param {unknown} payload - (Optional) Additional Info related to `Job`.
   * @returns A promise that resolves to updated `Job`.
   * @author manish@test.com
   */
