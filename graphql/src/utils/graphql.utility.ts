import fs from 'fs';
import { print } from 'graphql';
import { loadFilesSync, mergeTypeDefs } from 'graphql-tools';
import { join } from 'path';

export class GraphqlUtility {
  public static loadTypeDefs(__dirname: string): string {
    const typesArray = loadFilesSync(join(__dirname, './**/*.graphql'))
    const printedTypeDefs = print(mergeTypeDefs(typesArray));

    // Schema Directory
    const schemaDirectory = __dirname + '/schema';
    
    // Created Schema director if it not exists.
    if (!fs.existsSync(schemaDirectory)) {
      fs.mkdirSync(schemaDirectory);
    }

    fs.writeFileSync(join(schemaDirectory, '/joined.schema.graphql'), printedTypeDefs);
    const typeDefs = fs.readFileSync(join(schemaDirectory, '/joined.schema.graphql'), { encoding: 'utf-8' });

    return typeDefs;
  }
}