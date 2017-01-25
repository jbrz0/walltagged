/*eslint no-unused-vars: 0*/
'use strict';

import React from 'react';
import {CompactPicker} from 'react-color';

import 'flexboxgrid';
import s from './canvas.scss';
// import Draggable from 'react-draggable';
// import './main.css';
import Nav from '../nav/nav.jsx';

import {
    Card,CardText,CardTitle,CardHeader,
    Drawer,
    AppBar,GridList,GridTile,
    Slider, Toggle, MenuItem,
    SelectField, IconButton,
    ToolbarSeparator
} from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import UndoIcon from 'material-ui/svg-icons/content/undo';
// import RedoIcon from 'material-ui/svg-icons/content/redo';
// import ClearIcon from 'material-ui/svg-icons/action/delete';
// import SaveIcon from 'material-ui/svg-icons/content/save';
import RemoveIcon from 'material-ui/svg-icons/content/clear';
// import DownloadIcon from 'material-ui/svg-icons/file/file-download';
// import ZoomInIcon from 'material-ui/svg-icons/action/zoom-in';
// import ZoomOutIcon from 'material-ui/svg-icons/action/zoom-out';
// import YoutubeSearchedFor from 'material-ui/svg-icons/action/youtube-searched-for';

// const fabric = require('fabric').fabric;


const materialIcons = "material-icons";


import dataJson from './data.json'
import dataUrl from './data.url'

// import {SketchField, Tools} from '../src';
import {SketchField, Tools} from 'react-sketch';

const styles = {
    root: {
        padding: '3px',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '10px 10px 5px 10px',
        justifyContent: 'space-around'
    },
    gridList: {
        width: '100%',
        overflowY: 'auto',
        marginBottom: '24px'
    },
    gridTile: {
        backgroundColor: '#fcfcfc'
    },
    appBar: {
        backgroundColor: '#333'
    },
    separator: {
        height: '42px',
        backgroundColor: 'white'
    },
    iconButton: {
        fill: 'white',
        width: '42px',
        height: '42px'
    }
};

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

import PureRenderMixin from 'react-addons-pure-render-mixin';

class Canvas extends React.Component {
    constructor(params) {
        super(params);

        this._save = this._save.bind(this);
        this._undo = this._undo.bind(this);
        this._redo = this._redo.bind(this);
        this._clear = this._clear.bind(this);
        this._removeMe = this._removeMe.bind(this);
        this._download = this._download.bind(this);
        this._renderTile = this._renderTile.bind(this);
        this._selectTool = this._selectTool.bind(this);
        this._onSketchChange = this._onSketchChange.bind(this);

        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    state = {
        lineColor: 'black',
        lineWidth: 10,
        fillColor: '#68CCCA',
        shadowWidth: 0,
        shadowOffset: 0,
        tool: Tools.Pencil,
        fillWithColor: false,
        drawings: [],
        canUndo: false,
        canRedo: false,
        controlledSize: false,
        sketchWidth: 600,
        sketchHeight: 600
    };

    componentDidMount() {

        /*eslint-disable no-console*/

        // Working but undefined
        // this._sketch.scaleToWidth(canvas.getWidth());
        // canvas.add(this._sketch);


        // this._sketch.getWidth();
        // this._sketch.add(_sketch);

        (function (console) {
            console.save = function (data, filename) {
                if (!data) {
                    console.error('Console.save: No data');
                    return;
                }
                if (!filename) filename = 'console.json';
                if (typeof data === 'object') {
                    data = JSON.stringify(data, undefined, 4)
                }
                var blob = new Blob([data], {type: 'text/json'}),
                    e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');
                a.download = filename;
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e)
            }
        })(console);

        /*eslint-enable no-console*/

    }

    _selectTool(event, index, value) {
        this.setState({
            tool: value
        });
    }

    _save() {
        alert('right click "tagged wall" image to save');
        let drawings = this.state.drawings;
        drawings.push(this._sketch.toDataURL());
        this.setState({drawings: drawings});
    }

    _download() {
        /*eslint-disable no-console*/

        console.save(this._sketch.toDataURL(), 'toDataURL.txt');
        console.save(JSON.stringify(this._sketch.toJSON()), 'toDataJSON.txt');

        /*eslint-enable no-console*/

        let {imgDown} = this.refs;
        let event = new Event('click', {});

        imgDown.href = this._sketch.toDataURL();
        imgDown.download = 'toPNG.png';
        imgDown.dispatchEvent(event);
    }

    _renderTile(drawing, index) {
        return (
            <GridTile
                key={index}
                title='Tagged Wall'
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={1} rows={1} style={styles.gridTile}
                actionIcon={<IconButton onTouchTap={(c) => this._removeMe(index)}><RemoveIcon color="#FDFFFC"/></IconButton>}>
                <img src={drawing}/>
            </GridTile>
        );
    }

    _removeMe(index) {
        let drawings = this.state.drawings;
        drawings.splice(index, 1);
        this.setState({drawings: drawings});
    }

    _undo() {
        this._sketch.undo();
        this.setState({
            canUndo: this._sketch.canUndo(),
            canRedo: this._sketch.canRedo()
        })
    }

    _redo() {
        this._sketch.redo();
        this.setState({
            canUndo: this._sketch.canUndo(),
            canRedo: this._sketch.canRedo()
        })
    }

    _clear() {
        this._sketch.clear();
    }

    _onSketchChange() {
        let prev = this.state.canUndo;
        let now = this._sketch.canUndo();
        if (prev !== now) {
            this.setState({canUndo: now});
        }
    }



    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>

                <div>

                  <Nav />

                    {/*Sketch Area with tools*/}

                    <div className='row'>
                        <div className='col-xs-7 col-sm-7 col-md-9 col-lg-9 sketchfield-wrap'>

                            {/* Sketch area */}
                            <SketchField
                                name='sketch'
                                className='canvas-area'
                                ref={(c) => this._sketch = c}
                                lineColor={this.state.lineColor}
                                lineWidth={this.state.lineWidth}
                                fillColor={this.state.fillWithColor ? this.state.fillColor : 'transparent'}
                                width={this.state.controlledSize?this.state.sketchWidth:null}
                                height={this.state.controlledSize?this.state.sketchHeight:null}
                                defaultData={dataJson}
                                defaultDataType="json"
                                onChange={this._onSketchChange}
                                tool={this.state.tool}
                            />
                        </div>

                        {/* bounds="parent" */}
                        {/* bounds={left: 0, top: 0, right: 0, bottom: 0} */}
                        {/* <Draggable > */}
                        <div className='col-xs-5 col-sm-5 col-md-3 col-lg-3 menu-sidebar'>

                          <Card style={{margin:'0'}}>
                              <CardHeader title='Settings' actAsExpander={true} showExpandableButton={false} titleColor="#FDFFFC"
                                style={{background: '#53146C', margin: '0', borderRadius: '0'}} />
                              <CardText expandable={true} style={{background: '#EDF2F4', borderRadius: '0'}}>

                                  <IconButton onTouchTap={this._undo}>
                                  <i className={materialIcons}>undo</i>
                                  </IconButton>
                                  Undo <br />

                                  <IconButton
                                    onTouchTap={this._redo}
                                    disabled={!this.state.canRedo}>
                                  <i className={materialIcons}>redo</i>
                                  </IconButton>
                                  Redo <br />

                                  <IconButton
                                      onTouchTap={this._save}>
                                      <i className={materialIcons}>save</i>
                                  </IconButton>
                                  Save <br />

                                  {/* <IconButton
                                      onTouchTap={this._download}>
                                      <i className={materialIcons}>file_download</i>
                                  </IconButton>
                                  Download Data <br /> */}

                                  <IconButton
                                      onTouchTap={this._clear}>
                                      <i className={materialIcons}>clear</i>
                                  </IconButton>
                                  Clear <br />


                              </CardText>
                          </Card>


                            <Card style={{margin:'0'}}>
                                <CardHeader title='Tools' actAsExpander={true} showExpandableButton={false} titleColor="#FDFFFC"
                                  style={{background: '#FDBC2B', margin: '0', borderRadius: '0'}}/>
                                <CardText expandable={true} style={{background: '#EDF2F4', borderRadius: '0'}}>
                                    <label htmlFor='tool'>Canvas Tool</label><br/>
                                    <SelectField ref='tool' value={this.state.tool} onChange={this._selectTool} selectedMenuItemStyle={{color: '#43CDAC'}}>
                                        <MenuItem value={Tools.Select} primaryText="Select"/>
                                        <MenuItem value={Tools.Pencil} primaryText="Pencil"/>
                                        <MenuItem value={Tools.Line} primaryText="Line"/>
                                        <MenuItem value={Tools.Rectangle} primaryText="Rectangle"/>
                                        <MenuItem value={Tools.Circle} primaryText="Circle"/>
                                    </SelectField>
                                    <br/>
                                    {/* <br/>
                                    <br/> */}
                                    <label htmlFor='slider'>Line Weight</label>

                                    <Slider className="slider-wrap" ref='slider' step={0.1}
                                            defaultValue={this.state.lineWidth/100}
                                            onChange={(e, v) => this.setState({lineWidth:v*100})}/>
                                    <br/>
                                    <label htmlFor='zoom'>Zoom</label>
                                    <div>

                                      <IconButton
                                          ref='zoom'
                                          onTouchTap={(e) => this._sketch.zoom(1.25)}>
                                            <i className={materialIcons}>zoom_in</i>
                                      </IconButton>
                                        <IconButton
                                            ref='zoom1'
                                            onTouchTap={(e) => this._sketch.zoom(0.8)}>
                                              <i className={materialIcons}>zoom_out</i>
                                        </IconButton>


                                    </div>
                                </CardText>
                            </Card>
                            <Card initiallyExpanded={true} style={{margin:'0'}}>
                                <CardHeader title='Colors' actAsExpander={true} showExpandableButton={false} titleColor="#FDFFFC"
                                  style={{background: '#39BDEB', margin: '0', borderRadius: '0'}} />
                                <CardText expandable={true} style={{background: '#EDF2F4', borderRadius: '0'}}>
                                    <label htmlFor='lineColor' className="colorLabel">Line</label>
                                    <CompactPicker
                                        id='lineColor' color={this.state.lineColor}
                                        onChange={(color) => this.setState({lineColor:color.hex})}/>
                                    <br/>
                                    <br/>
                                    <Toggle label="Fill"
                                            style={{marginBottom: '10px'}}
                                            defaultToggled={this.state.fillWithColor}
                                            onToggle={(e) => this.setState({fillWithColor:!this.state.fillWithColor})}/>
                                    <CompactPicker
                                        color={this.state.fillColor}
                                        onChange={(color) => this.setState({fillColor:color.hex})}/>
                                </CardText>
                            </Card>
                        </div>
                        {/* </Draggable> */}
                    </div>

                    {/*Saved Paintings*/}

                    <div className='row'>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 saved-painting">
                            <div className="box" style={styles.root}>
                                <GridList
                                    cols={5}
                                    cellHeight={200}
                                    padding={1} style={styles.gridList}>
                                    {this.state.drawings.map(this._renderTile)}
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Canvas;
