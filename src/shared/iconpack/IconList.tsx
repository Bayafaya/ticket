import { iconMap } from './model/icon'
import { IconNames } from './model/types'

export default function IconList() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '24px',
        flexWrap: 'wrap',
      }}
    >
      {Object.keys(iconMap).map((item, index) => {
        const key = item as IconNames
        return (
          <div
            style={{
              border: '1px solid red',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',

              flexDirection: 'column',
              gap: '12px',
            }}
            key={index}
          >
            {iconMap[key]({
              size: 24,
              name: 'CircleClose',
            })}

            <p>{key}</p>
          </div>
        )
      })}
    </div>
  )
}
