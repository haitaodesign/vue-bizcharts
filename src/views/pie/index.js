import Pie from './pie'
import Rose from './rose'
import DonutRose from './donutRose'
import Sunburst from './sunburst'
import Us from './us'

export default {
  render () {
    return (
      <div className='pie-charts'>
        <div className='pie-chart'>
          <Pie />
          <Rose />
          <DonutRose />
          <Sunburst />
          <Us />
        </div>
      </div>
    )
  }
}
