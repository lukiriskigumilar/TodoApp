import {db,pool } from"../index.js"

describe("Drizzle Client", ()=>{
    afterAll(async () => {
        await pool.end();
    });

    test("drizzle client should run simple query", async ()=>{
        const result = await db.execute("SELECT 1 AS ok;");

        expect(result.rows[0].ok).toBe(1);
    })
})