const db = require("./db");

const AddCategory = (cid, cname, cimage) => {
  return db.category.findOne({ cname }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "category already exist",
      };
    } else {
      const newCAT = new db.category({
        cid,
        cname,
        cimage,
      });
      newCAT.save();

      return {
        statusCode: 200,
        message: "category detailes added",
      };
    }
  });
};
const AddSubCategory = (sid, sname, simage, sparentid, sgparentid) => {
  return db.subcategory.findOne({ sname }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "category already exist",
      };
    } else
      return db.subcategory.findOne({ sid: sparentid }).then((result) => {
        if (result) {
          var newarr = [];
          if (result.sgparentid.length == 0) {
            newarr.push(result.sparentid);
          } else {
            const a = result.sparentid;

            newarr = [...result.sgparentid];
            newarr.push(a);
          }

          sgparentid = [...newarr];
          const newCAT = new db.subcategory({
            sid,
            sname,
            simage,
            sparentid,
            sgparentid,
          });
          newCAT.save();
          return {
            statusCode: 200,
            message: "category detailes added",
          };
        } else {
          const newCAT = new db.subcategory({
            sid,
            sname,
            simage,
            sparentid,
            sgparentid,
          });
          newCAT.save();

          return {
            statusCode: 200,
            message: "category detailes added",
          };
        }
      });
  });
};

const addProduct = (pid, parentid, pgparentid, pname, pprice, pimage) => {
  return db.product.findOne({ pname }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "product already exist",
      };
    } else {
      return db.subcategory.findOne({ sid: parentid }).then((result) => {
        if (result) {
          var newarr = [];
          if (result.sgparentid.length == 0) {
            newarr.push(result.sparentid);
          } else {
            const a = result.sparentid;

            newarr = [...result.sgparentid];
            newarr.push(a);
          }

          pgparentid = [...newarr];
          const newProduct = new db.product({
            pid,
            parentid,
            pgparentid,
            pname,
            pprice,
            pimage,
          });
          newProduct.save();
          return {
            statusCode: 200,
            message: "Product detailes added",
          };
        } else {
          const newProduct = new db.product({
            pid,
            parentid,
            pgparentid,
            pname,
            pprice,
            pimage,
          });
          newProduct.save();

          return {
            statusCode: 200,
            message: "category detailes added",
          };
        }
      });
    }
  });
};

const getallCategory = () => {
  return db.category.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        category: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "no data avilabe",
      };
    }
  });
};
const getaCategory = (id) => {
    return db.category.find({ cid: id }).then((result) => {
      if (result) {
        return {
          statusCode: 200,
          category: result,
        };
      } else {
        return db.subcategory.find({ sid: id }).then((result) => {
          if (result) {
            return {
              statusCode: 200,
              category: result,
            };
          } else {
            // Add a return statement here to handle the case when neither category nor subcategory is found.
            return {
              statusCode: 404, // or any appropriate status code
              message: "Category not found",
            };
          }
        });
      }
    });
  };

const getallSubCategory = (sparentid) => {
  return db.subcategory.find({ sparentid }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        subcategory: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "no data avilabe",
      };
    }
  });
};
const getallProducts = (pid) => {
  return db.product
    .find({ $or: [{ parentid: pid }, { pgparentid: pid }] })
    .then((result) => {
      if (result) {
        return {
          statusCode: 200,
          products: result,
        };
      } else {
        return {
          statusCode: 404,
          message: "no data avilabe",
        };
      }
    });
};

module.exports = {
  AddCategory,
  AddSubCategory,
  addProduct,
  getallCategory,
  getallSubCategory,
  getallProducts,
  getaCategory,
};
