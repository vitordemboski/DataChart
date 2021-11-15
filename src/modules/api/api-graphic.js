import Storage from '@modules/services/storage';
import Api from '.';

class GraphicService extends Api {
  async getGraphics() {
    const user = await Storage.getItem('user');
    return this.get(`/graficos/getAll/${user.UserId}`);
  }
}

export default new GraphicService();
