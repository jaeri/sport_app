import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getTeams() {
    return this.teamsService.getTeams();
  }

  @Post()
  createTeam(@Body() teamData: { name: string }) {
    return this.teamsService.createTeam(teamData);
  }
}
