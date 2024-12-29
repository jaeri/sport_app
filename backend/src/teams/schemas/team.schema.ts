import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  name: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);