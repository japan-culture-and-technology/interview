import DB from './MemoryDataBase';
import { Experience } from '../../../domain/Experience';
import { IExperienceRepository } from '../repository/IExperienceRepository';

class ExperienceRepositoryImpl extends IExperienceRepository {
  public constructor() {
    super();
  }

  private convertModel(e: Experience): Experience {
    return new Experience(e);
  }

  public async findAll(): Promise<Experience[]> {
    let queryResults = DB.experiences;
    const results = queryResults.map((e): Experience => {
      return this.convertModel(e);
    });
    return results;
  }
}

export { ExperienceRepositoryImpl as ExperienceRepository };
