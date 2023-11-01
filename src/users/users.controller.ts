import { Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  constructor(private readonly userService: UsersService) {}

  async getAllUsers(@Req() request: Request, @Res() response: Response): Promise<any> {
    try {
      const result = await this.userService.getAllUsers()
      return response.status(200).json({
        status: 'OK!',
        message: 'Successfully fetch data!',
        result: result
      })
    } catch(err) {
      return response.status(500).json({
        status: 'OK!',
        message: 'Internal Server Error!',
      })
    }
  }
}