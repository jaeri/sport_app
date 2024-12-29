import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from './shemas/player.schema';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async getPlayers() {
    return this.playerModel.find().exec();
  }

  async createPlayer(playerData: { name: string }) {
    const newPlayer = new this.playerModel(playerData);
    return newPlayer.save();
  }
}