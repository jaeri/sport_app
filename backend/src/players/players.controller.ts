import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {}

  @Get()
  getPlayers() {
    return this.playersService.getPlayers();
  }

  @Post()
  createPlayer(@Body() playerData: { name: string }) {
    return this.playersService.createPlayer(playerData);
  }
}
