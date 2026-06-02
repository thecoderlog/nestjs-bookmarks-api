import {
    IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength,
} from 'class-validator';

export class CreateBookmarkDto {
    @IsUrl()
    url: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];
}
