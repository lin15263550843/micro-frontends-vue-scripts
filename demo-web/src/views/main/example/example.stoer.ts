import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
/**
 * Created by lhd on 2021-02-09 15:35:22
 */
@Module({
    namespaced: true,
    name: 'example',
    store,
    dynamic: true,
})
class ExampleModule extends VuexModule {}

export default getModule(ExampleModule);
