import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './schemas/team.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {
    
    constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}


  async getTeams() {
    return this.teamModel.find().exec();
  }

  async createTeam(teamData: { name: string }) {
    const newTeam = new this.teamModel(teamData);
    return newTeam.save();
  }
}
