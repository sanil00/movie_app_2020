import React from "react"

class Detail extends React.Component {
    compnentDidMount() {
        const { location, history } = this.props

        if (location.state === undefined) {
            history.push("/")
        }
    }

    render() {
        const { location } = this.props
        console.log(location)
        if (location.state) {
            return (
                <span>
                    {location.state.title}
                    {location.state.year}
                </span>
            )
        } else {
            return null
        }
    }
}
export default Detail
