---
sidebar_position: 6
title: Creating Assets
---

<div>
  <p>When creating an asset, you need to know what type of asset you want, the name of the asset, the amount of an asset, how much it costs to create an asset, and the metadata associated with an asset.</p>
  <p>Assets cannot be differentiated against one another except through their names. This means that all asset names must be unique; an asset creation will not be accepted by the chain if the name is not unique.</p>
  <p>Asset names are encoded via the ascii scheme. This means that asset names can currently only be in the latin alphabet.</p>
  <p>The cost of creating an asset can also be see more of as cost to "reserve the name"; this cost is static no matter how much of an asset you create (However, do note that it costs 100 YERB to reissue an asset).</p>
  <p>When creating a child asset the parent asset and parent ownership asset have no control over it. If you wish to have more control over assets, see <a href="#qualifiers_restricted_tags">restricted assets</a></p>
  <p>To put this information in a more readable format, all of the upcoming asset types will contain the following chart:</p>
   <table>
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>Name specifications</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Ownership specifications</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>Prerequisite specifications</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>Amount specifications</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Cost specifications</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>Reissuability specifications</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility specifications</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>Associated data specifications</td>
    </tr>
  </table> 
  
  <p>This table denotes the fields avaliable and their limitations.</p>
  <p>For instance, an ownership asset table looks like this:</p>
  <table>
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>Base asset name + '!'</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>No associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>Created with another asset</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>There can only be 1 of some ownership asset</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Comes with the base asset</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>Cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Has 0 divisibility</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>No data can be associated</td>
    </tr>
  </table>
  </div>