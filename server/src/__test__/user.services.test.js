import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import AppError from "../helpers/appError";

// Mock the repository before importing the service
jest.unstable_mockModule('../modules/users/user.repository.js', () => ({
  default: {
    findUserByMail: jest.fn(),
    createUser: jest.fn(),
  }
}));

// Now import after mocking
const userRepository = (await import("../modules/users/user.repository")).default;
const userService = (await import("../modules/users/user.service")).default;

describe("createUserService()", () => {

    it("should throw AppError when username already taken", async ()=>{
        //MOCK:find data
        userRepository.findUserByMail.mockResolvedValue({
            id:"uuid", username:"a@mail.com"
        });

        const input = {username:'a@mail.com'};

        await expect(userService.createUserService(input))
        .rejects
        .toThrow(AppError);

        await expect(userService.createUserService(input))
        .rejects
        .toMatchObject({
        message: "Email already exist",
        statusCode: 400,
        errors: [{ reason: "duplicate email" }]
        });

        expect(userRepository.createUser).not.toHaveBeenCalled();
    })


    it("should create user when email does not exist", async () => {
    // Mock: email tidak ditemukan
    userRepository.findUserByMail.mockResolvedValue(null);

    // Mock: createUser mengembalikan result
    userRepository.createUser.mockResolvedValue({
        id:'ini id',
        username:"johnDoe"
    });

    const input = { username:"johnDoe", email:"john@example.com" };

    const result = await userService.createUserService(input);

    expect(result).toEqual({
         id:'ini id',
        username:"johnDoe"
    });

    expect(userRepository.findUserByMail).toHaveBeenCalledWith("john@example.com");
    expect(userRepository.createUser).toHaveBeenCalledWith(input);
  });

})