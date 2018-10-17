import { JsonController, Get, Param, Body , HttpCode, Post} from 'routing-controllers'
import Advertisement from './entity';


@JsonController()
export default class PageController {

   
    @Get('/advertisements')
    async allAdds() { 
    const adds = await Advertisement.find()
    return { adds }
    }

    @Get('/advertisements/:id')
    getAdd(
        @Param('id') id: number
      ) {
        return Advertisement.findOne(id)
      }


      @Post('/advertisements')
      @HttpCode(201)
      createAdd(
        @Body() advertisement: Advertisement
      ) {
        return advertisement.save()
      }
      
}