import Storage from '@modules/services/storage';
import Api from '.';

class GraphicService extends Api {
  async getGraphics() {
    const user = await Storage.getItem('user');
    return this.get(`/graficos/getAll/${user.UserId}`);
  }

  async saveGraphic(data) {
    return this.post('/graficos/save', data);
  }

  async removeGraphic(data) {
    return this.post('/graficos/delete', data);
  }
}

export default new GraphicService();
